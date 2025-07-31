import React, { useState, useEffect } from 'react';
import { Users, Plus, Play, Crown, Clock, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { useGameStore } from '../../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';

interface MultiplayerViewProps {
  onViewChange: (view: string) => void;
}

interface Room {
  id: string;
  name: string;
  host: string;
  players: string[];
  maxPlayers: number;
  difficulty: number;
  subject: string;
  status: 'waiting' | 'playing' | 'finished';
}

export function MultiplayerView({ onViewChange }: MultiplayerViewProps) {
  const { currentUser } = useGameStore();
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: '1',
      name: 'Math Masters',
      host: 'Alice',
      players: ['Alice', 'Bob'],
      maxPlayers: 4,
      difficulty: 3,
      subject: 'Mathematics',
      status: 'waiting'
    },
    {
      id: '2',
      name: 'Science Squad',
      host: 'Charlie',
      players: ['Charlie'],
      maxPlayers: 3,
      difficulty: 2,
      subject: 'Science',
      status: 'waiting'
    },
    {
      id: '3',
      name: 'Logic Legends',
      host: 'Diana',
      players: ['Diana', 'Eve', 'Frank'],
      maxPlayers: 3,
      difficulty: 4,
      subject: 'Logic',
      status: 'playing'
    }
  ]);
  
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleCreateRoom = () => {
    if (!newRoomName.trim() || !currentUser) return;
    
    const newRoom: Room = {
      id: Date.now().toString(),
      name: newRoomName,
      host: currentUser.name,
      players: [currentUser.name],
      maxPlayers: 4,
      difficulty: 3,
      subject: 'Mixed',
      status: 'waiting'
    };
    
    setRooms(prev => [...prev, newRoom]);
    setNewRoomName('');
    setShowCreateRoom(false);
    setSelectedRoom(newRoom);
  };

  const handleJoinRoom = (room: Room) => {
    if (!currentUser || room.players.includes(currentUser.name) || room.players.length >= room.maxPlayers) {
      return;
    }
    
    const updatedRoom = {
      ...room,
      players: [...room.players, currentUser.name]
    };
    
    setRooms(prev => prev.map(r => r.id === room.id ? updatedRoom : r));
    setSelectedRoom(updatedRoom);
  };

  const handleLeaveRoom = () => {
    if (!selectedRoom || !currentUser) return;
    
    const updatedRoom = {
      ...selectedRoom,
      players: selectedRoom.players.filter(p => p !== currentUser.name)
    };
    
    if (updatedRoom.players.length === 0) {
      setRooms(prev => prev.filter(r => r.id !== selectedRoom.id));
    } else {
      setRooms(prev => prev.map(r => r.id === selectedRoom.id ? updatedRoom : r));
    }
    
    setSelectedRoom(null);
  };

  if (selectedRoom) {
    return <RoomView room={selectedRoom} onLeave={handleLeaveRoom} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Play Together</h1>
        <p className="text-muted-foreground">
          Join friends and family for collaborative puzzle solving
        </p>
      </div>

      {/* Create Room Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create New Room
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!showCreateRoom ? (
            <Button onClick={() => setShowCreateRoom(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Room
            </Button>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Room Name</label>
                <input
                  type="text"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter room name..."
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateRoom()}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleCreateRoom} disabled={!newRoomName.trim()}>
                  Create Room
                </Button>
                <Button variant="outline" onClick={() => setShowCreateRoom(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Rooms */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{room.name}</CardTitle>
                      <Badge 
                        variant={room.status === 'waiting' ? 'default' : room.status === 'playing' ? 'secondary' : 'outline'}
                      >
                        {room.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Crown className="h-4 w-4 text-yellow-500" />
                      <span>Host: {room.host}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{room.players.length}/{room.maxPlayers} players</span>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>Subject: {room.subject}</p>
                      <p>Difficulty: Level {room.difficulty}</p>
                    </div>
                    
                    <div className="pt-2">
                      {room.status === 'waiting' && room.players.length < room.maxPlayers ? (
                        <Button 
                          className="w-full" 
                          onClick={() => handleJoinRoom(room)}
                          disabled={currentUser?.name && room.players.includes(currentUser.name)}
                        >
                          {currentUser?.name && room.players.includes(currentUser.name) ? 'Already Joined' : 'Join Room'}
                        </Button>
                      ) : room.status === 'playing' ? (
                        <Button className="w-full" disabled>
                          <Play className="h-4 w-4 mr-2" />
                          Game in Progress
                        </Button>
                      ) : (
                        <Button className="w-full" disabled>
                          Room Full
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {rooms.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No rooms available</h3>
            <p className="text-muted-foreground">Create a new room to get started!</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function RoomView({ room, onLeave }: { room: Room; onLeave: () => void }) {
  const { currentUser } = useGameStore();
  const [timeLeft, setTimeLeft] = useState(30);
  const isHost = currentUser?.name === room.host;

  useEffect(() => {
    if (room.status === 'waiting') {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [room.status]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{room.name}</CardTitle>
              <p className="text-muted-foreground">Hosted by {room.host}</p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {room.status}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Room Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">{room.players.length}/{room.maxPlayers}</p>
              <p className="text-sm text-muted-foreground">Players</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <Trophy className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <p className="font-medium">Level {room.difficulty}</p>
              <p className="text-sm text-muted-foreground">Difficulty</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">{room.subject}</p>
              <p className="text-sm text-muted-foreground">Subject</p>
            </div>
          </div>

          {/* Players List */}
          <div>
            <h3 className="font-semibold mb-3">Players in Room</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {room.players.map((player, index) => (
                <div
                  key={player}
                  className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player}`}
                    alt={player}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{player}</p>
                    {player === room.host && (
                      <Crown className="h-3 w-3 text-yellow-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Game Controls */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Button variant="outline" onClick={onLeave}>
              Leave Room
            </Button>
            
            {isHost && room.status === 'waiting' && (
              <Button 
                size="lg"
                disabled={room.players.length < 2}
              >
                <Play className="h-5 w-5 mr-2" />
                Start Game
              </Button>
            )}
            
            {!isHost && room.status === 'waiting' && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Waiting for host to start the game...
                </p>
                {timeLeft > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Auto-start in {timeLeft}s
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}