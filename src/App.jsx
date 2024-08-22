import photo from "./assets/photo.jpg";
function App() {
  return (
    <div className='flex flex-col w-1/4 border-red bg-green'>
      <div className='h-1/2'>
        <img src={photo} alt='' />
      </div>
    </div>
  );
}

export default App;
