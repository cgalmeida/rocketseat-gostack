import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, StatusBar, FlatList, SafeAreaView,
    TouchableOpacity
} from 'react-native';

import api from './services/api';

// View: Container web, sem valor semantico
//todos os componentes por padrao possuem display flez

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);

        });

    }, []);

     async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Owner Projeto'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1'></StatusBar>
            <SafeAreaView style={styles.container}>
                <FlatList

                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project} key={project.id}>{project.title}</Text>

                    )}

                />
                <TouchableOpacity 
                activeOpacity={0.5} 
                style={styles.button} 
                onPress={handleAddProject}>
                    <Text style={styles.buttonText}>Adicionar Projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )

    {/*  <View style={styles.container}>
            <Text style={styles.title}>Hello GoStack</Text>
                {projects.map(project => (
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                ))}
               
            </View> */}


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
    project: {
        color: '#FFF',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
});