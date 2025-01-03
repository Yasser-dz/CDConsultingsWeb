'use client'; // Marquer ce fichier comme composant client

import { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import Image from "next/image";
import { postData } from './postData'; // Import des données

// Définir l'interface pour un article
interface Article {
  id: string;
  imgSrc: string;
  time: string;
  heading: string;
  date: string;
  summary: string;
  fullContent: string;
}

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleArticleClick = (item: Article) => {
    setSelectedArticle(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="bg-lightgrey py-20" id="blog-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-black text-lg font-normal tracking-widest">ARTICLES</h3>
          <h3 className="text-4xl sm:text-6xl font-bold">Our latest posts</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postData.map((item) => (
            <div key={item.id} className="bg-white m-3 p-4 shadow-lg rounded-3xl flex flex-col">
              <Image
                src={item.imgSrc}
                alt="article image"
                width={389}
                height={262}
                className="inline-block m-auto rounded-t-lg"
              />
              
              <div className="text-xs bg-black text-white inline-block py-1 px-2 rounded-full mt-2 text-left max-w-max">
                {item.time} read
              </div>

              <h4 className="text-2xl font-bold pt-6 text-black">{item.heading}</h4>
              <div className="text-sm text-gray-500">{item.date}</div>
              <p className="text-gray-600 mt-4 flex-grow">{item.summary}</p>

              <div className="mt-4">
                <button
                  onClick={() => handleArticleClick(item)}
                  className="bg-black text-white hover:bg-gray-800 hover:shadow-xl py-3 px-6 rounded-full mx-auto block text-center"
                >
                  Read Full Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher l'article complet */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                  <h4 className="text-2xl font-bold text-black">{selectedArticle?.heading}</h4>
                  <div className="text-sm text-gray-500">{selectedArticle?.date}</div>
                  {selectedArticle?.imgSrc && (
                    <Image
                      src={selectedArticle.imgSrc}
                      alt="article image"
                      width={389}
                      height={262}
                      className="block mx-auto rounded-t-lg mb-6"
                    />
                  )}
                  <div className="mt-4">
                    <div className="text-xl font-semibold">Introduction</div>
                    <p className="text-gray-600">{selectedArticle?.fullContent.split('##')[1]}</p>
                    <div className="text-xl font-semibold mt-4">Context</div>
                    <p className="text-gray-600">{selectedArticle?.fullContent.split('##')[2]}</p>
                    <div className="text-xl font-semibold mt-4">Methodology</div>
                    <p className="text-gray-600">{selectedArticle?.fullContent.split('##')[3]}</p>
                    <div className="text-xl font-semibold mt-4">Results</div>
                    <p className="text-gray-600">{selectedArticle?.fullContent.split('##')[4]}</p>
                    <div className="text-xl font-semibold mt-4">Conclusion</div>
                    <p className="text-gray-600">{selectedArticle?.fullContent.split('##')[5]}</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={closeModal}
                      className="py-2 px-4 text-white bg-black rounded-full"
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
