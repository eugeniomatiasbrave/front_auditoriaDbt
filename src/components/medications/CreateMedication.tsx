import { useForm } from "react-hook-form";
import { postData, ApiResponse } from '../../services/axiosService.js';
import { endpoints } from "../../services/endpoints";
import { IMedication } from "../../types";
import { useNavigate } from "react-router-dom";


export const CreateMedication = () => {
  const { register, handleSubmit } = useForm<IMedication>();

  const navigate = useNavigate();

  return (
    <div className=" mt-5">
      <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
        Crear Medicamento
      </h2>
      <form
        className="mt-4"
        onSubmit={handleSubmit(async (values) => {
          const response = await postData<ApiResponse>(endpoints.MEDICATION_CREATE, values);
          console.log(response);
        })}
      >
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-300 p-8">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre del Medicamento:</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="text-black border border-gray-300 rounded-md p-2 w-full"
              placeholder="Nombre del medicamento"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Presentación:</label>
            <input
              type="text"
              {...register("presentation", { required: true })}
              className="text-black border border-gray-300 rounded-md p-2 w-full"
              placeholder="Presentación del medicamento"
              autoComplete="off"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Potencia:</label>
              <input
                type="text"
                {...register("potency", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Potencia del medicamento"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700">Droga:</label>
              <input
                type="text"
                {...register("drug", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Droga del medicamento"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Troquel:</label>
              <input
                type="text"
                {...register("troquel", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Troquel del medicamento"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700">Laboratorio:</label>
              <input
                type="text"
                {...register("laboratory", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Laboratorio"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Cobertura %:</label>
              <input
                type="number"
                {...register("coverage", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Cobertura %"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700">Unidades:</label>
              <input
                type="number"
                {...register("units", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Unidades caja"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700">Category ID:</label>
              <input
                type="number"
                {...register("categoryId", { required: true })}
                className="text-black border border-gray-300 rounded-md p-2 w-full"
                placeholder="Categoria"
                autoComplete="off"
              />
            </div>

          </div>
          <div>
            <label className="block text-gray-700">Descripción:</label>
            <textarea
              {...register("description")}
              className="text-black border border-gray-300 rounded-md p-2 w-full"
              placeholder="Descripción del medicamento"
              autoComplete="off"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-sky-600 font-bold text-white p-2 rounded hover:bg-sky-700"
            >
              Crear Medicamento
            </button>
            <button
              type="button"
              className="w-full bg-gray-400 font-bold text-white p-2 rounded hover:bg-gray-500"
              onClick={() => navigate("/medication")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
