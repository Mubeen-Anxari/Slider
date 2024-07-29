import Image from 'next/image';
import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export const data = [
  {
    id: 1,
    name: 'Mubeen',
    image: '/student1.jpeg',
    job: 'Marketer',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto in, labore laudantium molestiae omnis voluptas fuga distinctio dignissimos quos officiis ipsam eligendi officia dolor cumque aut error non exercitationem enim.',
  },
  {
    id: 2,
    name: 'Ammar',
    image: '/img3.jpeg',
    job: 'Digital marketer',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto in, labore laudantium molestiae omnis voluptas fuga distinctio dignissimos quos officiis ipsam eligendi officia dolor cumque aut error non exercitationem enim.',
  },
  {
    id: 3,
    name: 'Ali',
    image: '/img4.jpeg',
    job: 'Developer',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto in, labore laudantium molestiae omnis voluptas fuga distinctio dignissimos quos officiis ipsam eligendi officia dolor cumque aut error non exercitationem enim.',
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const { name, image, job, title } = data[index];
  const checkNumber = (number: number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={300} height={300} />
      </div>
      <div className="flex ml-24 gap-4 mt-2 flex-col">
        <div className="flex justify-between">
          <h4 className="font-bold text-xl">{name}</h4>
          <div className="flex mt-1 gap-6">
            <FaAngleLeft
              onClick={prevPerson}
              className="cursor-pointer font-bold text-xl bg-black text-white"
            />
            <FaAngleRight
              onClick={nextPerson}
              className="cursor-pointer font-bold text-xl bg-black text-white"
            />
          </div>
        </div>
        <h4 className="font-bold text-xl">{job}</h4>
        <h4 className="w-[400px] font-bold">{title}</h4>
      </div>
    </div>
  );
}
