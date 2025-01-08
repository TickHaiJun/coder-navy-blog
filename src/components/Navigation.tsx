import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const links = [
    { path: "/", label: "首页" },
    { path: "/articles", label: "文章" },
    { path: "/projects", label: "项目" },
    { path: "/about", label: "关于我" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            程序员海军
          </Link>
          
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-primary transition-colors ${
                  location.pathname === link.path ? "text-primary font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="ml-4"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;