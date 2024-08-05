const RecipeContainer = () => {
  return (
    <div
      className='absolute top-20 w-full h-full flex items-center'
      style={{ left: '550px' }}
    >
      <div className='border-4 border-green rounded-lg w-2/3 h-2/3 bg-opacity-50 bg-white shadow-xl'>
        <div className='flex items-start justify-center h-full p-4'>
          <h1 className='text-5xl font-bold mb-4 text-brown'>Recipes</h1>
        </div>
      </div>
    </div>
  );
};

export default RecipeContainer;
