import { Download, FileText, Folder, Archive } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

const downloadFiles = [
  {
    icon: Archive,
    name: "Complete STL Package",
    size: "245 MB",
    description: "All 3D printable parts in one archive",
    files: "38 STL files",
    format: ".zip",
  },
  {
    icon: Folder,
    name: "Base & Structure",
    size: "89 MB",
    description: "Main body and structural components",
    files: "12 STL files",
    format: ".zip",
  },
  {
    icon: Folder,
    name: "Armor Plates",
    size: "67 MB",
    description: "Decorative outer armor pieces",
    files: "15 STL files",
    format: ".zip",
  },
  {
    icon: Folder,
    name: "Electronics Housing",
    size: "43 MB",
    description: "LED mounts and cable channels",
    files: "8 STL files",
    format: ".zip",
  },
  {
    icon: FileText,
    name: "Assembly Manual",
    size: "12 MB",
    description: "Detailed step-by-step PDF guide",
    files: "48 pages",
    format: ".pdf",
  },
  {
    icon: FileText,
    name: "Wiring Diagram",
    size: "3 MB",
    description: "RGB LED connection schematic",
    files: "High-res image",
    format: ".pdf",
  },
  {
    icon: FileText,
    name: "Parts List & BOM",
    size: "1 MB",
    description: "Bill of materials for electronics",
    files: "Shopping list",
    format: ".pdf",
  },
  {
    icon: FileText,
    name: "Slicing Profiles",
    size: "500 KB",
    description: "Recommended Cura & PrusaSlicer settings",
    files: "Multiple profiles",
    format: ".zip",
  },
];

export function Downloads() {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleDownload = (fileName: string) => {
    if (!isPurchased) {
      toast.error("Please purchase access to download files");
      return;
    }
    // Simulate download
    toast.success(`Downloading ${fileName}...`);
    // In a real app, this would trigger an actual file download
  };

  const handlePurchase = () => {
    toast.success("Redirecting to secure payment...");
    // In production, this would redirect to payment page
    setTimeout(() => {
      setIsPurchased(true);
      toast.success("Purchase complete! You can now download all files.");
    }, 2000);
  };

  return (
    <section id="downloads" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.05)] to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            DOWNLOAD CENTER
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access all STL files, assembly manuals, and technical documentation
          </p>
        </div>

        <div className="mb-12 p-6 bg-[rgba(var(--primary-rgb),0.1)] border border-[rgba(var(--primary-rgb),0.3)] rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-white text-xl mb-2">
                {isPurchased ? "✓ Premium Access Activated" : "Premium Access Required"}
              </h3>
              <p className="text-gray-400">
                {isPurchased 
                  ? "You have lifetime access to all files and future updates" 
                  : "One-time payment for lifetime access to all STL files and documentation"}
              </p>
            </div>
            {!isPurchased && (
              <Button
                onClick={handlePurchase}
                className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white text-lg px-8"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Access - $20 CAD
              </Button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloadFiles.map((file, index) => (
            <Card
              key={index}
              className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm hover:border-[rgba(var(--primary-rgb),0.5)] transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center mb-4">
                  <file.icon className="w-6 h-6 text-[var(--primary-color)]" />
                </div>
                <CardTitle className="text-white text-lg">{file.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  {file.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Size:</span>
                  <span className="text-gray-300">{file.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Contains:</span>
                  <span className="text-gray-300">{file.files}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Format:</span>
                  <span className="text-gray-300">{file.format}</span>
                </div>
                <Button
                  onClick={() => handleDownload(file.name)}
                  variant="outline"
                  className="w-full border-[rgba(var(--primary-rgb),0.3)] text-[var(--primary-color)] hover:bg-[rgba(var(--primary-rgb),0.1)] mt-4"
                  disabled={!isPurchased}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isPurchased ? "Download" : "Locked"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All files include lifetime updates and access to future variants and improvements
          </p>
        </div>
      </div>
    </section>
  );
}