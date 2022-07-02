import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';

function App() {
  return (
    <>
    <div className="container pt-5">
      <div className='card mx-auto' style={{width: '18rem'}}>
        <ProfilePhoto />
        <div className="card-body">
          <h5 className="card-title">Profile details</h5>
          <FullName />
          <Address />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
