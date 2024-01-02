import ESBuild from 'esbuild';
import { config } from '../shared/config';

ESBuild.build(config).catch(console.error);
