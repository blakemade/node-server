import path from 'path';

const fs  = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);

jest.mock('path')