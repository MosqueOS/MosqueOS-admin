interface MosqueProfile {
  id: string
  name: string
  address: Address
  email: string
  phoneNumber: string
}

interface Address {
  addressLineOne: string
  addressLineTwo: string
  city: string
  town: string
  postcode: string
}

export default function MosqueProfileDisplay({
  mosque,
}: {
  mosque: MosqueProfile
}) {
  return (
    <div>
      <div>
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Mosque information
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Public details about the mosque
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Mosque name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {mosque.name}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <address>
                {mosque.address.addressLineOne}
                <br />
                {mosque.address.addressLineTwo}
                <br />
                {mosque.address.city}
                <br />
                {mosque.address.postcode}
                <br />
              </address>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {mosque.email}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {mosque.phoneNumber}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
