import React, { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPlaceList, geo, setLocation } from "../slices/weatherSlice";
import { ArrowLeft, MapPin, Search } from "lucide-react";

const SearchBox = ({ open, setOpen, buttonRef }) => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(-1);

  const ref = useRef(null);

  const dispatch = useDispatch();

  const {
    data: { placeList },
  } = useSelector((state) => state.weather);

  const handleKeyDown = (e) => {
    if (placeList.length === 0) return;
    const { keyCode } = e;
    if (keyCode === 40) {
      setActive((prev) => (prev + 1) % 5);
    } else if (keyCode === 38) {
      setActive((prev) => (prev - 1) % 5);
    } else if (keyCode === 13) {
      dispatch(
        setLocation({ lat: placeList[active].lat, lon: placeList[active].lon })
      );
      setOpen(false);
      setSearch("");
    }
  };

  const handleClickOutside = (e) => {
    if (buttonRef.current && ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const searchPlace = useCallback(() => {
    dispatch(geo(search));
    setActive(-1);
  }, [search]);

  useEffect(() => {
    const timeout = setTimeout(searchPlace, 1000);
    return () => clearTimeout(timeout);
  }, [searchPlace]);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        open ? "flex flex-col" : "hidden"
      } md:block fixed w-full bg-white dark:bg-gray-900 top-0 left-0 h-screen md:relative md:w-[400px] md:h-fit`}
      ref={ref}
    >
      <div className="flex items-center border px-4  py-4 md:py-2 rounded-lg border-gray-200 dark:border-gray-800">
        <ArrowLeft
          className="block md:hidden w-5 h-5 text-gray-600 dark:text-gray-400 mr-4"
          onClick={() => setOpen(false)}
        />
        <Search className="hidden md:block w-5 h-5 text-gray-600 dark:text-gray-400 mr-4" />
        <input
          type="text"
          placeholder="search"
          className="flex-1 placeholder:text-gray-600 dark:placeholder:text-gray-400 text-gray-700 dark:text-gray-300 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setOpen(true)}
        />
      </div>
      {placeList?.length !== 0 && open && (
        <ul className="relative md:absolute md:top-10.5 md:left-0 md:w-full md:border md:border-gray-200 md:dark:border-gray-800 md:shadow-lg">
          {placeList?.map((place, i) => {
            return (
              <li
                key={place?.lat}
                onMouseEnter={() => setActive(i)}
                onClick={() => [
                  dispatch(
                    setLocation({
                      lat: place.lat,
                      lon: place.lon,
                    })
                  ),
                  setOpen(false),
                  setSearch(""),
                ]}
                className={`${
                  active === i
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "bg-white dark:bg-gray-900"
                } px-2 py-4 flex items-center gap-2 cursor-pointer`}
              >
                <MapPin className="icon" />
                <div>
                  <h1 className="heading-2">{place?.name}</h1>
                  <p className="text-xs text-gray-500">{place?.state}, {place?.country}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
