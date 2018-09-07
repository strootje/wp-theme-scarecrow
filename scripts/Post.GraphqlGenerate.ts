import { readFile } from "fs";
import Paths from './../src/app/Assets/Utils/Paths';

readFile(Paths.Src('Domain', 'Entities', 'Wordpress', 'WP_FetchMenuByLocation.ts'), ( err, data ) => {
	if (err) throw err;


});
