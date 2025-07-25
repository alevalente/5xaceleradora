
const Statistics = () => {
  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          Você já enfrentou esses desafios na sua empresa?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 text-center mb-12 max-w-4xl">
          Veja por que tantos gestores e empresários se identificam imediatamente.
        </p>
        
        <div className="w-full md:w-3/5 lg:w-1/2">
          <video 
            controls 
            poster="/lovable-uploads/d489a7bf-04da-457c-9c1b-74797bad3271.png"
            className="w-full rounded-xl shadow-2xl border border-gray-200"
            preload="metadata"
          >
            <source src="https://wmvjjnpljoookuhmzpfc.supabase.co/storage/v1/object/public/video-secao-2-site-5x//Video%205x%20Aceleradora%20-%20Final.mp4" type="video/mp4" />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        </div>

      </div>
    </section>
  );
};

export default Statistics;
