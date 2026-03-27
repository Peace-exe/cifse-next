import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log("Admin login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 ">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative w-full max-w-md">
        <Card className="w-full border border-neutral-800 bg-card shadow-2xl ">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10 border border-neutral-800">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-card-foreground">
              Admin Portal
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Secure access to administrative dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-card-foreground font-medium"
                >
                  Administrator Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border border-neutral-800 bg-neutral-900 placeholder:text-muted-foreground focus:ring-2 focus:ring-neutral-700"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-card-foreground font-medium"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border border-neutral-800 bg-neutral-900 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-neutral-700"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-input bg-background text-primary focus:ring-ring"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-neutral-400"
                  >
                    Keep me signed in
                  </Label>
                </div>
                <Button
                  variant="link"
                  className="px-0 text-primary hover:text-primary/80 text-sm"
                >
                  Reset password
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-neutral-50 text-neutral-950 hover:bg-primary/90 font-semibold py-2.5"
              >
                Access Dashboard
              </Button>
              <div className="text-center text-xs text-neutral-400">
                Authorized personnel only. All access is monitored and logged.
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
