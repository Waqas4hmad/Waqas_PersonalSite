import {motion} from "framer-motion"
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {FC, memo,} from 'react';
import {Tilt} from "react-tilt"

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {github} from "./common/assets"
import {projects} from "./common/constants"
import {fadeIn, textVariant} from "./common/motion"
import {styles} from "./common/styles"

interface ProjectCardProps {
  index: number;
  name: string ;
  description: string;
  tags: ({ name: string; color: string } | undefined)[];
  image: string;
  source_code_link?: string ;
  live_link?: string | undefined;
}
const Portfolio: FC = memo(() => {
    const router = useRouter();

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }: ProjectCardProps) => {
    // const navigate = useNavigate()

    const handleClick = () => {
      // navigate(`/${index}`)
      router.push(`/project/${index}`)
      
    }
    return (
      <motion.div onClick={handleClick} variants={fadeIn("up", "spring", index * 0.5, 0.75) as any} whileInView="animate">
        <Tilt
          className='background_color_light p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
          options={{
            max: 45,
            scale: 1,
            speed: 450,
            axis: "x"
          }}
        >
          <div className='relative w-full h-[230px]' >
          
                  <Image 
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                  src={image} 
                  />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
             {source_code_link && (
                <div
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  onClick={() => window.open(source_code_link, "_blank")}
                >
                  <Image
                    alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                  src={github}
                />
              </div>
             )
             }
             </div>
          </div>

          <div className='mt-5'>
            <h3 className=' font-bold text-[24px]. text_color_dark'>{name??""}</h3>
            <p className='mt-2  text-[14px] line-clamp-3 text_color_dark'>{description??""}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags?.map((tag) => (
              <p
                className={`text-[14px] ${tag?.color}`}
                key={`${name}-${tag?.name.toLowerCase()}`}
              >
                #{tag?.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };



  return (
    <Section  className="background_color" sectionId={SectionId.Portfolio}>
      <>
        <motion.div animate="show" initial="hidden" variants={textVariant() as any} viewport={{once: true}} whileInView="show">
        <p className={styles.sectionSubTextWhite}>My work</p>
        <h2 className={styles.sectionHeadTextwhite}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-2 text-white text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1) as any}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

      </div>

      <div className="mt-20 flex flex-wrap gap-7 lex w-full justify-center">
        {(projects as ProjectCardProps[]).map((project, index) => {
          const {index: _projectIndex, ...projectProps} = project;
          return (
            <ProjectCard index={index} key={`project-${index}`} {...projectProps} />
          )
        })}

      </div>
        
      </>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
