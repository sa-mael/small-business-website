export function BackgroundText() {
  const technicalInfo = [
    "STL: STereoLithography file format, standard for 3D printing containing triangulated surface geometry",
    "RGB: Red Green Blue color model using additive color mixing with 256 levels per channel",
    "FDM: Fused Deposition Modeling, 3D printing process using thermoplastic filament",
    "PLA: Polylactic Acid, biodegradable thermoplastic derived from renewable resources",
    "LED: Light Emitting Diode, semiconductor light source with high efficiency",
    "PWM: Pulse Width Modulation, technique for controlling LED brightness",
    "WiFi: Wireless networking technology using IEEE 802.11 standards",
    "IoT: Internet of Things, network of physical devices with embedded electronics",
    "Mesh: Collection of vertices, edges and faces defining 3D object shape",
    "Layer Height: Thickness of each printed layer, typically 0.1-0.3mm",
    "Infill: Internal structure pattern of 3D printed object, affects strength and weight",
    "Support: Temporary structures to support overhangs during printing",
    "Bed Adhesion: Connection between print and build plate surface",
    "Retraction: Filament pullback to prevent stringing during travel moves",
    "Nozzle: Heated component that extrudes melted filament",
    "Hotend: Assembly containing heater and nozzle for melting filament",
    "Stepper Motor: Brushless DC motor dividing rotation into discrete steps",
    "G-code: Numerical control programming language for CNC machines",
    "Slicing: Process of converting 3D model into printer instructions",
    "Build Volume: Maximum printable dimensions of 3D printer",
    "Extrusion: Process of pushing material through nozzle to form object",
    "Thermistor: Temperature sensor for monitoring hotend heat",
    "Cooling Fan: Component for solidifying freshly extruded plastic",
    "Print Speed: Rate of nozzle movement during printing, measured in mm/s",
    "Z-axis: Vertical axis controlling layer height in 3D printer",
    "Calibration: Process of tuning printer settings for optimal results",
    "Firmware: Software controlling printer hardware operations",
    "OctoPrint: Web interface for managing 3D printer remotely",
    "PETG: Polyethylene Terephthalate Glycol, durable 3D printing material",
    "ABS: Acrylonitrile Butadiene Styrene, engineering thermoplastic",
    "Warping: Deformation caused by uneven cooling during printing",
    "Bridging: Printing horizontally between two points without support",
    "Overhang: Feature extending beyond previous layer at angle",
    "Raft: Base layer structure improving bed adhesion",
    "Brim: Single layer outline around print base for adhesion",
    "Skirt: Outline printed around object to prime nozzle",
    "Multiplexing: Technique for controlling multiple RGB LEDs efficiently",
    "Diffusion: Scattering of light for even illumination",
    "Lumens: Unit measuring total visible light output",
    "Wavelength: Distance between successive wave peaks, determines color",
    "Addressable LED: Individually controllable LED with integrated driver",
    "WS2812B: Popular addressable RGB LED integrated circuit",
    "NeoPixel: Adafruit brand name for addressable RGB LED strips",
    "DMX512: Digital multiplex protocol for controlling stage lighting",
    "Dimming Curve: Non-linear brightness perception compensation",
    "Color Temperature: Measure of light color in Kelvin degrees",
    "CRI: Color Rendering Index, measuring light quality for color accuracy",
    "PCB: Printed Circuit Board, mechanically supporting electronic components",
    "GPIO: General Purpose Input/Output, programmable digital signal pins",
    "Microcontroller: Compact integrated circuit for embedded applications",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 select-none z-0">
      <div className="absolute inset-0 flex flex-col gap-4 p-8 text-[var(--primary-color)] text-[8px] leading-tight font-mono animate-slow-scroll">
        {technicalInfo.map((info, index) => (
          <div key={index} className="whitespace-nowrap">
            {info}
          </div>
        ))}
        {technicalInfo.map((info, index) => (
          <div key={`repeat-${index}`} className="whitespace-nowrap">
            {info}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col gap-4 p-8 text-[var(--primary-color)] text-[8px] leading-tight font-mono animate-slow-scroll-reverse" style={{ left: '50%' }}>
        {technicalInfo.slice().reverse().map((info, index) => (
          <div key={index} className="whitespace-nowrap">
            {info}
          </div>
        ))}
        {technicalInfo.slice().reverse().map((info, index) => (
          <div key={`repeat-${index}`} className="whitespace-nowrap">
            {info}
          </div>
        ))}
      </div>
    </div>
  );
}
