'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            {isLogin ? 'Login' : 'Register'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {!isLogin && (
              <Input type="text" placeholder="Full Name" className="w-full" required />
            )}
            <Input type="email" placeholder="Email" className="w-full" required />
            <Input type="password" placeholder="Password" className="w-full" required />
            <Button className="w-full mt-2">{isLogin ? 'Login' : 'Register'}</Button>
          </form>
          <p className="mt-4 text-sm text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button onClick={toggleAuthMode} className="text-blue-500 hover:underline">
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
