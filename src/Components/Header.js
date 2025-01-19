import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES} from "../Utils/constant";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Navigate to home page after sign out
      })
      .catch(() => {
        navigate("/error"); // Navigate to error page if sign out fails
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { uid, email, displayName, photoURL } = currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [dispatch, navigate]);

  
  const handleGptSearchClick = () => {
    // Toggle GPT search view
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
    
  return (
    <div className="w-screen absolute px-12 py-6  bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img className="w-40" src={LOGO} alt="LOGO" />
      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (
            <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          )}
          <button
              className="py-2 px-4 mx-4 my-2 bg-red-600 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
            {showGptSearch? "Homepage": "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full"
            alt="User Icon"
            src={user?.photoURL || "default-user-icon.png"} // Fallback to default image if photoURL is missing
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white ml-4"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};


export default Header; 