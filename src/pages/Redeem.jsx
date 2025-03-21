import React from "react";
import { useNavbar } from "/src/contexts/NavbarContext";
import baseStore from "/src/stores/baseStore";
import { baseUrl } from "/src/stores/baseStore";
import { useNavigate } from "react-router-dom";

function Redeem() {
  const { setNavbarVisible } = useNavbar();
  const [redeem, setRedeem] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    setNavbarVisible(false);
    const getRedeem = async () => {
      try {
        const res = await baseStore.getRedeem();
        console.log(res);
        setRedeem(res);
      } catch (error) {
        setRedeem(false);
      }
    };
    getRedeem();
    return () => setNavbarVisible(true);
  }, []);

  if (!redeem) return;

  console.log(redeem);

  return (
    <div className="min-h-screen max-h-screen bg-primary flex flex-col items-center">
      <div className="bg-white w-32 h-32 rounded-full mt-23 flex justify-center items-center">
        <img
          src={`${baseUrl}/${redeem?.earnedBadge?.image}`}
          alt=""
          className="w-14 h-14 object-cover rounded-full"
        />
      </div>
      <h2 className="font-medium text-white mt-4 text-2xl">
        {redeem?.earnedBadge?.name}
      </h2>
      <h3 className="text-white">New Badge unlocked!</h3>
      <h2 className=" text-white mt-6 font-bold flex-1">
        {redeem.earnedVirginPoints} Virgin Points
      </h2>
      <div
        onClick={() => navigate("/profile")}
        className="absolute bg-white w-10/12 h-13 rounded-full flex justify-center items-center bottom-3 text-primary font-bold"
      >
        Home
      </div>
    </div>
  );
}

export default Redeem;
