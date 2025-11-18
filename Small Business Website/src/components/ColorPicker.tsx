import { Palette } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

const presetColors = [
  { name: "Purple", value: "#9333ea" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#10b981" },
  { name: "Red", value: "#ef4444" },
  { name: "Orange", value: "#f97316" },
  { name: "Pink", value: "#ec4899" },
  { name: "Cyan", value: "#06b6d4" },
  { name: "Yellow", value: "#eab308" },
];

export function ColorPicker() {
  const { primaryColor, setPrimaryColor } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[rgba(var(--primary-rgb),0.1)]"
        >
          <Palette className="w-4 h-4 mr-2" />
          Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-black/95 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-md">
        <div className="space-y-4">
          <h3 className="text-white">Customize Theme Color</h3>
          
          <div className="grid grid-cols-4 gap-2">
            {presetColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setPrimaryColor(color.value)}
                className="group relative h-12 rounded-lg border-2 transition-all hover:scale-105"
                style={{
                  backgroundColor: color.value,
                  borderColor: primaryColor === color.value ? "#fff" : "transparent",
                }}
                title={color.name}
              >
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white drop-shadow-lg">{color.name}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Custom Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-full h-10 rounded border border-[rgba(var(--primary-rgb),0.3)] bg-black cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-24 px-2 rounded border border-[rgba(var(--primary-rgb),0.3)] bg-black text-white text-sm"
                placeholder="#000000"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
