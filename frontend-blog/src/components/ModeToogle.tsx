import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"


const  ModeToggle = () => {
    const { theme, setTheme } = useTheme();
  
    return (
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant="outline"
        className="shadow-none border-none"
        size="icon"
      >
        {theme === "dark" ? (
          <Sun className="h-[1rem] w-[1rem] transition-all" />
        ) : (
          <Moon className="h-[1rem] w-[1rem] transition-all" />
        )}
      </Button>
    );
  }

  export default ModeToggle;