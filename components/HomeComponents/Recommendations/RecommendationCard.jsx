import React from 'react';
import CardLayout from '../../Common/CardLayout';
import Image from 'next/image';

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="p-8 h-full relative card_stylings transition">
                <Image 
                    src={data?.image.startsWith('http') ? data.image : `/${data.image}`} 
                    alt={data?.name || 'Recommendation Image'} 
                    width={64} 
                    height={64} 
                    className="absolute z-10 right-10 -top-5 border-Green border-[3px] rounded-full m-0"
                />
                <div className="text-Snow underline italic">
                    <a href={data?.linkednURL} target="_blank" rel="noreferrer">{data?.name}</a>
                </div>
                <div className="text-xs text-LightGray italic mt-1">{data?.designation}</div>
                <div className="text-sm mt-2 text-LightGray font-normal">{data?.view}</div>
            </div>
        </CardLayout>
    );
};

export default RecommendationCard;