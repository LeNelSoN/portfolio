"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import CVComplet from '@/app/assets/CV complet.png';
import CVDesign from '@/app/assets/CV design.png';
 
    const CheckCV: React.FC = () => {

        const [withDesign, setWithDesign] = useState<boolean>(false);
    
        const onDesignChange = (): void => {
            setWithDesign(!withDesign);
        }

        return (
            <div className="flex flex-col items-center">
                {withDesign ?
                    <>
                        <Image 
                            src={CVComplet}
                            width={200} 
                            height={200} 
                            alt="CV Design"
                            className="object-cover mb-6"
                        />
                        <Link href="/assets/CV Nelis Valentin.pdf" download>
                            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:cursor-pointer w-52">
                                Télécharger mon CV Complet
                            </button>
                        </Link>
                    </>
                    :
                    <>
                        <Image 
                            src={CVDesign}
                            width={200} 
                            height={200} 
                            alt="CV Design"
                            className="object-cover mb-6"
                        />
                        <Link href="/assets/CV Nelis Valentin Développeur Fullstack.pdf" download>
                            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:cursor-pointer w-52">
                                Télécharger mon CV Design
                            </button>
                        </Link>
                    </>
                }
                <label className="mt-4 text-gray-100 flex items-center justify-center">
                <input 
                    type="checkbox" 
                    checked={withDesign} 
                    onChange={onDesignChange} 
                    className="mr-2 hover:cursor-pointer w-5 h-5 rounded-4xl"
                />
                    Version Complete
                </label>
            </div>
        )
    }
 
export default CheckCV