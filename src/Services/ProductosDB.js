import { supabase } from '../Config/supabase.js';

export const RegistrarProductos = async (producto) => {
    try {
        const { data, error } = await supabase
            .from('Productos')
            .insert([producto])
            .select()
        if(error){
            console.log('Error al Registrar el Producto')
            throw error;
        }
        return data;
    }
    catch (error) {
        console.error('Error de Server')
        throw error;
    }
}

export const ObtenerProductos = async () => {
    try {
        const { data, error } = await supabase
            .from('Productos')
            .select('*')
            .order('created_at', { ascending: true })
        if(error){
            console.log('Error al Obtener los Productos')
            throw error;
        }
        return data;
    }
    catch (error) {
        console.error('Error de Server')
        throw error;
    }
}

export const ActualizarProductos = async (id, producto) => {
    try {
        const { data, error } = await supabase
            .from('Productos')
            .update(producto)
            .eq('id', id)
            .select()
        if(error){
            console.log('Error al Actualizar el Producto')
            throw error;
        }
        return data;
    }
    catch (error) {
        console.error('Error de Server')
        throw error;
    }
}

export const EliminarProductos = async (id) => {
    try {
        const { error } = await supabase
            .from('Productos')
            .delete()
            .eq('id', id)
        if(error){
            console.log('Error al Eliminar el Producto')
            throw error;
        }
        return true;
    }
    catch (error) {
        console.error('Error de Server')
        throw error;
    }
}