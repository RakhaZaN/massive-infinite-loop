import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { layanan } from "../../../shared/data";

const ListLayanan = (props) => {
  //   const [selected, setSelected] = useState(layanan[0]);
  const { selected, setSelected, error } = props;

  return (
    <div className="group mb-4">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label
          className={`block mb-2 text-sm font-medium text-gray-900`}
        >
          Jenis Layanan
        </Listbox.Label>
        <div className="relative">
          <Listbox.Button
            className={`relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none sm:text-sm ${
              error && "border-red-500"
            }`}
          >
            <span className="block truncate">{selected?.nama}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
              {layanan.map((lyn) => (
                <Listbox.Option
                  key={lyn.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-customBlue4 text-white" : "text-gray-900"
                    }`
                  }
                  value={lyn}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {lyn.nama}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-inherit" : "text-customBlue4"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default ListLayanan;
