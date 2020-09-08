import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

function ImageGrids({ setSelectedImg }) {
  const { docs } = useFirestore('images');

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='upoaded'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrids;
