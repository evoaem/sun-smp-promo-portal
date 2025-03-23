
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Users, Star, ArrowDown, MapPin, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const copyServerIP = () => {
    navigator.clipboard.writeText("play.sunsmp.fun");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-earth-pattern bg-cover bg-fixed">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-b from-primary/70 to-transparent backdrop-blur-sm">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="animate-float mb-6">
            <Sun size={80} className="text-primary mx-auto animate-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Welcome to SUN SMP
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our Earth SMP Minecraft server and become part of an amazing community!
          </p>
          
          {/* Server IP Box */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-primary/30 backdrop-blur-md border-2 border-primary p-4 rounded-lg mb-8 max-w-md mx-auto animate-pulse"
          >
            <h2 className="text-xl font-bold mb-2">Server IP Address</h2>
            <div className="flex items-center justify-center gap-2 bg-primary/40 p-3 rounded-md cursor-pointer hover:bg-primary/50 transition-colors" onClick={copyServerIP}>
              <Server className="text-foreground" size={20} />
              <span className="font-mono text-lg font-semibold">play.sunsmp.fun</span>
            </div>
            {isCopied && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm mt-2 font-medium"
              >
                IP copied to clipboard!
              </motion.p>
            )}
          </motion.div>
          
          <div className="space-x-4">
            <Button
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://discord.gg/e4GzvHMwFV", "_blank")}
            >
              Join our Discord
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8"
        >
          <ArrowDown className="animate-bounce text-primary" size={32} />
        </motion.div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/80 to-transparent backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Our Server</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-primary/10 backdrop-blur-md border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Server Features</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Custom Earth map with realistic geography</li>
                <li>Player-run towns and nations</li>
                <li>Economy system with player shops</li>
                <li>Regular community events and contests</li>
                <li>Advanced protection systems</li>
                <li>Custom plugins for enhanced gameplay</li>
              </ul>
            </Card>
            <Card className="p-6 bg-primary/10 backdrop-blur-md border-primary/20">
              <h3 className="text-xl font-semibold mb-4">How to Join</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Join our Discord server for the latest information</li>
                <li>Read the server rules and guidelines</li>
                <li>Get whitelisted by introducing yourself</li>
                <li>Connect to the server using Minecraft Java Edition</li>
                <li>Start your adventure in our Earth SMP!</li>
              </ol>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-secondary/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-primary/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
            <Users className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-foreground/70">Join players from around the world in building and exploring together.</p>
          </div>
          <div className="bg-primary/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
            <Star className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Earth SMP</h3>
            <p className="text-foreground/70">Experience Minecraft like never before with our custom Earth SMP features.</p>
          </div>
          <div className="bg-primary/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
            <Sun className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
            <p className="text-foreground/70">Participate in exciting community events and competitions with awesome rewards.</p>
          </div>
        </motion.div>
      </section>

      {/* Discord Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/80 to-transparent backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">Connect with other players, stay updated, and become part of our growing community!</p>
          <Button
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://discord.gg/e4GzvHMwFV", "_blank")}
          >
            Join Discord Server
          </Button>
        </motion.div>
      </section>

      {/* Server Information Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-secondary/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Server Information</h2>
          <Card className="p-6 bg-primary/10 backdrop-blur-md border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Server className="text-primary" size={24} />
                <p>Server IP: play.sunsmp.fun</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={24} />
                <p>Server Location: North America (East Coast)</p>
              </div>
              <div className="flex items-center gap-3">
                <Server className="text-primary" size={24} />
                <p>Version: Minecraft Java 1.20+</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Credits Section */}
      <footer className="py-8 px-4 bg-secondary/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/60">This website is made by mayu</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
