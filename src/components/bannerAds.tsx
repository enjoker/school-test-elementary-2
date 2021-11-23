import React from 'react';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';

const BannerAds = () => {
   return (
      <BannerAd
         size={BannerAdSize.ADAPTIVE_BANNER}
         unitId={'ca-app-pub-1678137107426089/6018755111'}
         onAdFailedToLoad={(error) => console.error(error)}
      />
   )
}

export default BannerAds