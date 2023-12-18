import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const CBPelanggan = ({ selected, setSelected, error }) => {
  const [query, setQuery] = useState("");
  const [pelanggan, setPelanggan] = useState([]);

  useEffect(() => {
    getPelanggan();
  }, []);

  const getPelanggan = async () => {
    const response = await axios.get("http://localhost:5000/api/pelanggan");
    setPelanggan(response.data.data.pelanggan);
  };

  const filteredPeople =
    query == ""
      ? pelanggan
      : pelanggan.filter((dt) =>
          dt?.fullname
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="group mb-4">
      <Combobox value={selected} onChange={setSelected} nullable>
        <Combobox.Label
          className={`block mb-2 text-sm font-medium text-gray-900`}
        >
          Pelanggan
        </Combobox.Label>
        <div className="relative">
          <div className="relative w-full cursor-default text-left">
            <Combobox.Input
              className={`w-full py-2 pl-3 pr-10 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none sm:text-sm ${
                error && "border-red-500"
              }`}
              displayValue={(dt) => dt?.fullname}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {query != "" && filteredPeople.length === 0 ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((dt) => (
                  <Combobox.Option
                    key={dt?.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-customBlue4 text-white" : "text-gray-900"
                      }`
                    }
                    value={dt}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {dt?.fullname}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-customBlue4"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CBPelanggan;
