import { world } from "@minecraft/server";

// Evento que se activa cuando un jugador muere
world.afterEvents.entityDie.subscribe((event) => {
    const entity = event.deadEntity;

    // Verificamos que la entidad sea un jugador
    if (entity.typeId === "minecraft:player") {
        const x = Math.floor(entity.location.x);
        const y = Math.floor(entity.location.y);
        const z = Math.floor(entity.location.z);
        const dimension = entity.dimension.id;

        // Enviar mensaje con las coordenadas y la dimensión
        entity.sendMessage(`\u00a76Has muerto en: ${x}, ${y}, ${z}, ${dimension}`);
    }
});