import Image from 'next/image';
import React from 'react';

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <Image
                  src={`https://cdn.magicui.design/companies/Google.svg`}
                  alt="Google Logo"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <Image
                  src={`https://cdn.magicui.design/companies/Microsoft.svg`}
                  alt="Microsoft Logo"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <Image
                  src={`https://cdn.magicui.design/companies/GitHub.svg`}
                  alt="GitHub Logo"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <Image
                  src={`https://cdn.magicui.design/companies/Uber.svg`}
                  alt="Notion Logo"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <Image
                  src={`https://cdn.magicui.design/companies/Notion.svg`}
                  alt=""
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
