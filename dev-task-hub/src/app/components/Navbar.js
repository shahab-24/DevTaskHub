import { motion } from "framer-motion";

const Navbar = () => {
        return (
                <div>
                        <motion.nav 
      className="bg-blue-500 text-white p-4 shadow-lg flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">DevTaskHub</h1>
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md">Get Started</button>
    </motion.nav>
    </div>
                
        );
};

export default Navbar;