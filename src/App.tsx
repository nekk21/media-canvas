import React, { useState } from 'react';
import 'react-resizable/css/styles.css';
import AssetComponent from './AssetComponent';
import { Canvas } from './styled';
import { IAsset } from './types';

const App = () => {
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [inputUrl, setInputUrl] = useState('');

  const addAsset = () => {
    if (inputUrl) {
      const newAsset: IAsset = {
        id: Date.now(),
        url: inputUrl,
        x: 50,
        y: 50,
        width: 300,
        height: 200,
        type: inputUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? 'image' : 'video',
        playing: false,
      };
      setAssets([...assets, newAsset]);
      setInputUrl('');
    }
  };

  const removeAsset = (id: number) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const handleResize = (id: number, size: { width: number; height: number }) => {
    const updatedAssets = assets.map(asset => (asset.id === id ? { ...asset, ...size } : asset));
    setAssets(updatedAssets);
  };

  const handleDrag = (id: number, position: { x: number; y: number }) => {
    const updatedAssets = assets.map(asset => (asset.id === id ? { ...asset, ...position } : asset));
    setAssets(updatedAssets);
  };

  const toggleGlobalPlayback = () => {
    const updatedAssets = assets.map(asset => (asset.type === 'video' ? { ...asset, playing: !asset.playing } : asset));
    setAssets(updatedAssets);
  };

  return (
    <div>
      <input type='text' value={inputUrl} onChange={e => setInputUrl(e.target.value)} />
      <button onClick={addAsset}>Add Asset</button>
      <button onClick={toggleGlobalPlayback}>Toggle Global Playback</button>
      <Canvas>
        {assets.map(asset => (
          <AssetComponent
            key={asset.id}
            asset={asset}
            onResize={handleResize}
            onDrag={handleDrag}
            onRemove={removeAsset}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default App;
