import typia, { Primitive } from "typia";

import api from "./../../../../api";

export const test_api_param_number = async (
    connection: api.IConnection
): Promise<void> => {
    const output: Primitive<number> = 
        await api.functional.param.number(
            connection,
            typia.random<Primitive<number>>(),
        );
    typia.assert(output);
};