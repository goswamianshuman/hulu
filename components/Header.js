import {
  AccountBalance,
  Collections,
  Home,
  Search,
  TrendingUp,
  Verified,
} from "@mui/icons-material";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 ml-5 mr-5 mt-5 mb-0 justify-between
        items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={Home} />
        <HeaderItem title="TRENDING" Icon={TrendingUp} />
        <HeaderItem title="VERIFIED" Icon={Verified} />
        <HeaderItem title="COLLECTIONS" Icon={Collections} />
        <HeaderItem title="SEARCH" Icon={Search} />
        <HeaderItem title="ACCOUNT" Icon={AccountBalance} />
      </div>

      <Image
        className="object-contain mt-0"
        src="/hulu.svg"
        width={100}
        height={100}
      />
    </header>
  );
}

export default Header;
