import Draggable from 'react-draggable';
import { IAssetComponentProps } from './types';
import React from 'react';
import { ResizableBox } from 'react-resizable';
import { Asset, RemoveButton } from './styled';
import ReactPlayer from 'react-player';

const AssetComponent: React.FC<IAssetComponentProps> = ({ asset, onResize, onDrag, onRemove }) => {
  const handleResize = (event: any, { size }: any) => {
    onResize(asset.id, size);
  };

  const handleDrag = (e: any, data: { x: any; y: any }) => {
    onDrag(asset.id, { x: data.x, y: data.y });
  };

  const handleStart = (e: any) => {
    if (e.target.classList.contains('react-resizable-handle')) {
      return false;
    }
  };

  return (
    <Draggable onDrag={handleDrag} onStart={handleStart} bounds='parent' defaultPosition={{ x: asset.x, y: asset.y }}>
      <ResizableBox width={asset.width} height={asset.height} onResize={handleResize} resizeHandles={['se']}>
        <Asset>
          {asset.type === 'video' ? (
            <ReactPlayer url={asset.url} width='100%' height='100%' playing={asset.playing} controls />
          ) : (
            <img src={asset.url} alt='Asset' width='100%' height='100%' />
          )}
          <RemoveButton onClick={() => onRemove(asset.id)}>X</RemoveButton>
        </Asset>
      </ResizableBox>
    </Draggable>
  );
};

export default AssetComponent;
