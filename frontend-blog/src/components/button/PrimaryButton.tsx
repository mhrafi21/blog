import { motion } from "framer-motion";
const PrimaryButton = ({ buttonName,className }: { buttonName: string, className?:string }) => {
  return (
    <div className="mt-8 flex space-x-4 items-center justify-center">
      <motion.button
        type="submit"
        className={`${className ? className : 'px-10 py-3'} py-3  rounded-lg bg-indigo-600 text-white font-medium border border-indigo-600 hover:bg-transparent
                                  hover:text-indigo-600 transition`}
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonName}
      </motion.button>
    </div>
  );
};

export default PrimaryButton;
