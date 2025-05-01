import { sensors as sensorsData } from "@/config/sensors";
import { TypeSensor } from "@/types/misc";

const sensors: TypeSensor[] = sensorsData as TypeSensor[];

const findSensor = (argId: string | number): TypeSensor => {
  // unknownSensorMeta
  const unknownSensorMeta = sensors[0];

  try {

    // Modify argId
    const receivedId = isNaN(Number(argId)) && typeof argId === 'string' ? argId?.toLowerCase() : Number(argId);

    for (const key in sensors) {
      const sensor = sensors[key];
      // if unique id matched
      if (sensor?.uniqueId == receivedId) return { ...sensor }
      // if id matched
      else if (sensor?.id == receivedId) return { ...sensor }
      // if multiple ids matched
      else if (sensor?.multipleIds && sensor?.multipleIds.includes(receivedId)) {
        // If received id is number
        if (typeof receivedId === "number") return { ...sensor, uniqueId: receivedId }
        else return { ...sensor }
      }
      // if name matched
      else if (sensor?.name?.toLowerCase() == receivedId) return { ...sensor }
      // if fullName matched
      else if (sensor?.fullName?.toLowerCase() == receivedId) return { ...sensor }
    }

    // If the loop completes without finding the sensor
    return {
      ...unknownSensorMeta,
      name: `{${receivedId}} - UNKNOWN SENSOR`
    };

  } catch (error: any) {
    return {
      ...unknownSensorMeta,
      name: "Err. Catch Block"
    };
  }
};

export default findSensor;
