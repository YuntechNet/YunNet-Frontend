ROM node

RUN git clone --depth=1 https://github.com/YuntechNet/YunNet-Frontend.git -b dev /YunNet-Frontend
RUN cd /YunNet-Frontend && npm install && npm run build
WORKDIR /YunNet-Frontend/dist

CMD ["python", "-m", "SimpleHTTPServer"]

