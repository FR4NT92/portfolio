export default function Footer() {
  return (
    // CAMBIO CLAVE: -mt-[35vh] empata con las tarjetas. La página muere exactamente acá.
    <div className="relative z-10 bg-[#111] -mt-[35vh] rounded-t-[32px] pt-[80px] px-[20px] md:px-[40px] pb-[30px] md:pb-[40px] shadow-2xl flex flex-col justify-between">
      
      <div className="text-left md:text-right mb-[50px] md:mb-[60px]">
        <h3 className="text-[22px] md:text-[26px] font-medium max-w-[600px] md:ml-auto leading-[1.4] text-[#999]">
          Resultados en cada proyecto,<br/>
          <strong className="text-white font-extrabold">con enfoque en diseño<br/>y funcionalidad.</strong>
        </h3>
      </div>
      
      <div className="bg-white rounded-[16px] py-[20px] px-[30px] flex flex-col md:flex-row justify-between items-center gap-5">
        <a 
          href="https://behance.net/frantruppa" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-[10px] text-[14px] font-semibold no-underline text-[#1a1a1a] transition-opacity duration-300 hover:opacity-70 md:order-1 order-2"
        >
          <div className="bg-[#1a1a1a] text-white w-[28px] h-[28px] flex items-center justify-center rounded-[6px] font-extrabold text-[15px]">
            Bē
          </div>
          <span>para más.</span>
        </a>

        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=frantruppa@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#1a1a1a] bg-transparent py-[10px] px-[34px] rounded-[40px] text-[14px] font-semibold text-[#1a1a1a] no-underline transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white md:order-2 order-1"
        >
          contacto
        </a>
      </div>
    </div>
  );
}
