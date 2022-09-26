import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface Props extends PropsWithChildren {
    title: string,
    subTitle?: string,
    children?: React.ReactNode,
    style?: {}
}

export default function Card({ title, subTitle, children, style }: Props) {
    return (
        <View style={[styles.card, style]}>
            <Text style={styles.cardTitle}>{title}</Text>
            {subTitle &&
                <Text style={styles.cardSubTitle}>{subTitle}</Text>
            }
            {children}
        </View>
    );
}