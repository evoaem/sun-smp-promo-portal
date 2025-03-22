
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Users, Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-secondary">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Users className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-foreground/70">Join players from around the world in building and exploring together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Star className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Earth SMP</h3>
            <p className="text-foreground/70">Experience Minecraft like never before with our custom Earth SMP features.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Sun className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
            <p className="text-foreground/70">Participate in exciting community events and competitions.</p>
          </div>
        </motion.div>
      </section>

      {/* Discord Section */}
      <section className="py-20 px-4">
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
