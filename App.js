import React, { useState } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const GOOGLE = "https://www.google.com/";
const YTB = "https://www.youtube.com/";
const NN = "https://vietnamagriculture.nongnghiep.vn/";
const A2B = "https://book.beta-a2b.work/login";
export default function App() {
    const [loading, setLoading] = useState(true);

    // const handleNavigationStateChange = (navState) => {
    //     // Kiểm tra các yêu cầu tải trang
    //     if (navState.url === A2B) {
    //         // Xử lý các yêu cầu tải trang tại đây
    //     }
    // };

    return (
        <View style={{ flex: 1 }}>
            <WebView
                originWhitelist={["*"]}
                source={{ uri: GOOGLE }}
                // onLoadStart={() => setLoading(true)}
                // onLoad={() => setLoading(false)}
                // onNavigationStateChange={handleNavigationStateChange}
            />
        </View>
    );
}
