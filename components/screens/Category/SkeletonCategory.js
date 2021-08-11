import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


const SkeletonCategory = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                    <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                </View>
                <View>
                    <View style={{ width: 120, height: 20 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                </View>
            </View>
            <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                    <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                </View>
                <View>
                    <View style={{ width: 120, height: 20 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                </View>
            </View>
            <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                    <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                </View>
                <View>
                    <View style={{ width: 120, height: 20 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                </View>
            </View>
            <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                    <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                </View>
                <View>
                    <View style={{ width: 120, height: 20 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                </View>
            </View>
            <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                    <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                </View>
                <View>
                    <View style={{ width: 120, height: 20 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                    <View style={{ width: 100, height: 20, marginTop: 5 }} />
                </View>
            </View>
        </SkeletonPlaceholder>
    )
}

export default SkeletonCategory;