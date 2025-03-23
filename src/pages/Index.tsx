
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Pickaxe, Users, MapPin, Server, TreeDeciduous, Swords } from "lucide-react";
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
    <div className="min-h-screen bg-minecraft-texture">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-b from-earth-brown/40 to-transparent backdrop-blur-sm">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="animate-float mb-6">
            <div className="w-24 h-24 bg-primary rounded-sm mx-auto animate-pulse pixelated-border"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-minecraft font-bold text-foreground mb-4">
            SUN SMP
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-minecraft">
            Join our Earth SMP Minecraft server!
          </p>
          
          {/* Server IP Box */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-earth-brown/50 backdrop-blur-md pixelated-border p-4 mb-8 max-w-md mx-auto"
          >
            <h2 className="text-xl font-minecraft font-bold mb-2">Server IP Address</h2>
            <div className="flex items-center justify-center gap-2 bg-primary/70 p-3 pixelated-border cursor-pointer hover:bg-primary/90 transition-colors" onClick={copyServerIP}>
              <Server className="text-foreground" size={20} />
              <span className="font-minecraft text-lg font-semibold">play.sunsmp.fun</span>
            </div>
            {isCopied && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm mt-2 font-medium font-minecraft"
              >
                IP copied to clipboard!
              </motion.p>
            )}
          </motion.div>
          
          <div>
            <Button
              className="bg-primary hover:bg-primary-dark text-foreground font-minecraft font-semibold px-8 py-6 pixelated-border transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://discord.gg/e4GzvHMwFV", "_blank")}
            >
              Join our Discord
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-earth-green/30 to-transparent backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-earth-brown/30 backdrop-blur-md p-6 pixelated-border hover:translate-y-[-5px] transition-all duration-300">
            <Users className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-minecraft font-semibold mb-2">Community</h3>
            <p className="text-foreground/70 font-minecraft">Join players from around the world in building and exploring</p>
          </div>
          <div className="bg-earth-brown/30 backdrop-blur-md p-6 pixelated-border hover:translate-y-[-5px] transition-all duration-300">
            <TreeDeciduous className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-minecraft font-semibold mb-2">Earth SMP</h3>
            <p className="text-foreground/70 font-minecraft">Build on a realistic Earth map with towns and nations</p>
          </div>
          <div className="bg-earth-brown/30 backdrop-blur-md p-6 pixelated-border hover:translate-y-[-5px] transition-all duration-300">
            <Swords className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-minecraft font-semibold mb-2">Events</h3>
            <p className="text-foreground/70 font-minecraft">Regular community events with awesome rewards</p>
          </div>
        </motion.div>
      </section>

      {/* Server Information Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-earth-blue/30 to-transparent backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-minecraft font-bold mb-8 text-center">Server Info</h2>
          <Card className="p-6 bg-earth-brown/30 backdrop-blur-md pixelated-border">
            <div className="space-y-4 font-minecraft">
              <div className="flex items-center gap-3">
                <Server className="text-primary" size={24} />
                <p>Server IP: play.sunsmp.fun</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={24} />
                <p>Server Location: North America (East Coast)</p>
              </div>
              <div className="flex items-center gap-3">
                <Pickaxe className="text-primary" size={24} />
                <p>Version: Minecraft Java 1.20+</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Credits Section */}
      <footer className="py-8 px-4 bg-earth-brown/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/60 font-minecraft">This website is made by mayu</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
