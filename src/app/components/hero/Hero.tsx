import CheckCV from "../checkCV/CheckCV";

const Hero: React.FC = () => {
    
  return (
    <div className="bg-linear-to-b from-gray-900 from-90% text-gray-100">
      <div className="container mx-auto p-4 flex items-center justify-center py-26">
        <div className="mx-auto p-4 text-center w-1/2">
          <h1 className="text-4xl">Moi</h1>
          <p className="text-2xl">Je suis Valentin Nelis, développeur web.</p>
          <p className="text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est fugiat magnam, a fugit quam in laborum quibusdam vero totam ipsum rem sapiente, labore reiciendis nesciunt architecto maiores ipsa! Quam!</p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center"> 
          <CheckCV />
        </div>
      </div>
    </div>
  );
};

export default Hero