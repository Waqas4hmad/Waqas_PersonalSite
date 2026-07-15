import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from "react";
import {IconContext} from "react-icons";
import {FiArrowLeft} from "react-icons/fi";

import {projects} from "../../components/Sections/common/constants";
import {styles} from "../../components/Sections/common/styles";

export default function project() {

  const router = useRouter();
  const {id} = router.query;
  const index = typeof id === "string" ? Number(id) : 0;
  const project = projects[index] ?? projects[0];

  if (!project) return null;

  const {name, description, tags, image,live_link} = project;

  const handleBack = () => {
    router.push("/");
  };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <div
                    className={`mx-auto h-full w-full ${styles.padding} max-w-7xl mx-auto relative z-0`}
                >
                    <div>
                        <div className="flex flex-row items-center">
                            <IconContext.Provider value={{size: "1.5rem"}}>
                                <div
                                    className="cursor-pointer"
                                    onClick={handleBack}
                                >
                                    <FiArrowLeft color="white" />
                                </div>
                            </IconContext.Provider>
                            <p className="ml-4 text-white">Back</p>
                        </div>
                        <div className="mt-5 pl-8">
                            <div className="flex flex-col items-start">
                                <p className="text-white text-[24px]">{name}</p>
                                <div className="mt-5">
                                    <Image
                                        alt="project"
                                        className="w-full h-1/4 rounded-md"
                                        src={image}
                                    />
                                </div>
                                <div className="mt-5">
                                    <p className="text-white text-[18px]">
                                        Description:
                                    </p>
                                    <p className="text-white text-[16px] mt-2 whitespace-pre-line">
                                        {description}
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <p className="text-white text-[18px]">
                                        Skills Acquired:
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {tags.map((tag: any) => (
                                            <p
                                                className="text-[16px] text-white"
                                                key={`${name}-${tag?.name}`}
                                            >
                                                {tag?.name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {live_link !== undefined ? (
                                    <div className="mt-5">
                                        {/* <p className="text-white text-[18px]">Live Demo:</p> */}
                                        <Link
                                            href={live_link}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <p className="text-blue-400 text-[16px]">
                                                View Live Demo
                                            </p>
                                        </Link>
                                        
                                        {/* <p className="text-white text-[16px] mt-2">{live_link}</p> */}
                                    </div>
                                ) : null}
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
