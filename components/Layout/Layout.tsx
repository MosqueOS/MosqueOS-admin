import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Head from "next/head"
import { useUser } from "@auth0/nextjs-auth0/client"
import md5 from "md5"
import Image from "next/image"
import Link from "next/link"

const getGravatarURL = (email: string | null | undefined) => {
  const address = String(email).trim().toLowerCase()
  const hash = md5(address)

  return `https://www.gravatar.com/avatar/${hash}`
}

const navigation = [
  { name: "Dashboard", href: "/", current: false },
  { name: "Mosque Profile", href: "/mosque-profile", current: false },
  { name: "Prayer Times", href: "/prayer-times", current: false },
  { name: "Screens", href: "/screens", current: false },
]

const userNavigation = [
  /*   { name: "Your Profile", href: "/settings/profile" },
  { name: "Settings", href: "/settings" }, */
  { name: "Log out", href: "/api/auth/logout" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Layout({ children }: any) {
  const { user, error, isLoading } = useUser()

  const pageTitle = children.props.pageTitle
  const activeIndex = children.props.activeIndex

  return (
    <>
      <Head>
        <title>{`${pageTitle} - MosqueOS Admin`}</title>
        <meta
          name="description"
          content="Admin interface for the MosqueOS Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure
            as="nav"
            className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="block h-8"
                          src="/branding/logo-white.png"
                          alt="MosqueOS Logo"
                        />
                      </div>
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                activeIndex === index
                                  ? "bg-indigo-700 text-white"
                                  : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                "rounded-md py-2 px-3 text-sm font-medium",
                              )}
                              aria-current={
                                activeIndex === index ? "page" : undefined
                              }
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 flex-shrink-0">
                          <div>
                            <Menu.Button className="flex rounded bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                              <span className="sr-only">Open user menu</span>
                              <div className="flex items-start px-5 text-right">
                                <div className="mr-3">
                                  <div className="text-base font-medium text-white">
                                    {user?.name}
                                  </div>
                                  <div className="text-sm font-medium text-indigo-300">
                                    {user?.email}
                                  </div>
                                </div>
                                <div className="flex-shrink-0">
                                  <Image
                                    width={32}
                                    height={32}
                                    className="h-10 w-10 rounded-full"
                                    src={getGravatarURL(user?.email)}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block py-2 px-4 text-sm text-gray-700",
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item, index) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          activeIndex === index
                            ? "bg-indigo-700 text-white"
                            : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                          "block rounded-md py-2 px-3 text-base font-medium",
                        )}
                        aria-current={
                          activeIndex === index ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-indigo-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <Image
                          width={32}
                          height={32}
                          className="h-10 w-10 rounded-full"
                          src={getGravatarURL(user?.email)}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user?.name}
                        </div>
                        <div className="text-sm font-medium text-indigo-300">
                          {user?.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {pageTitle}
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
