import Link from 'next/link'

export default function Home() {
  return (
    <div class="flex h-screen">
      <div class="m-auto">

        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <ul class="mt-4 text-sm text-gray-700 dark:text-gray-400">
            <li class="py-1">
              <Link href={"/products/1"} class="text-blue-500 underline dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500">Product 1</Link>
            </li>
            <li class="py-1">
              <Link href={"/products/2"} class="text-blue-500 underline dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500">Product 2</Link>
            </li>
            <li class="py-1">
              <Link href={"/products/3"} class="text-blue-500 underline dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500">Product 3</Link>
            </li>
          </ul>
        </div>

        <div class="block text-center max-w-sm p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#" class="mr-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Home
          </a>
        </div>

      </div>
    </div>
  )
}